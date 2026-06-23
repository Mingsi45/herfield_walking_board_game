type EndingCardContent = {
  yourResults: string;
  title: string;
  tagline: string;
  conditionLabel: string;
  athleteExampleLabel: string;
  athleteExample: string;
  whyLabel: string;
  athleteWhy: string;
  imageSrc: string;
};

const CARD_WIDTH = 800;
const PADDING = 48;
const CONTENT_WIDTH = CARD_WIDTH - PADDING * 2;
const IMAGE_MAX = 360;

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
): string[] {
  const paragraphs = text.split("\n");
  const lines: string[] = [];

  for (const paragraph of paragraphs) {
    if (!paragraph) {
      lines.push("");
      continue;
    }

    let current = "";
    const words = paragraph.split(/\s+/);

    for (const word of words) {
      if (ctx.measureText(word).width > maxWidth) {
        if (current) {
          lines.push(current);
          current = "";
        }

        let segment = "";
        for (const char of word) {
          const test = segment + char;
          if (ctx.measureText(test).width > maxWidth && segment) {
            lines.push(segment);
            segment = char;
          } else {
            segment = test;
          }
        }
        current = segment;
        continue;
      }

      const test = current ? `${current} ${word}` : word;
      if (ctx.measureText(test).width > maxWidth && current) {
        lines.push(current);
        current = word;
      } else {
        current = test;
      }
    }

    if (current) lines.push(current);
  }

  return lines.length > 0 ? lines : [""];
}

function measureBlock(
  ctx: CanvasRenderingContext2D,
  content: EndingCardContent,
  photo: HTMLImageElement,
) {
  let height = PADDING;

  height += 20; // your results
  height += 40; // title
  height += 32; // tagline
  height += 24; // condition

  const imageRatio = photo.width / photo.height;
  const imageWidth = IMAGE_MAX;
  const imageHeight = imageWidth / imageRatio;
  height += 24 + imageHeight + 36; // frame + image

  ctx.font = "600 14px system-ui, sans-serif";
  const exampleLabelWidth = ctx.measureText(content.athleteExampleLabel).width;
  ctx.font = "14px system-ui, sans-serif";
  const exampleLines = wrapText(
    ctx,
    content.athleteExample,
    CONTENT_WIDTH - exampleLabelWidth,
  );
  height += exampleLines.length * 22 + 12;

  ctx.font = "600 14px system-ui, sans-serif";
  const whyLabelWidth = ctx.measureText(content.whyLabel).width;
  ctx.font = "14px system-ui, sans-serif";
  const whyLines = wrapText(
    ctx,
    content.athleteWhy,
    CONTENT_WIDTH - whyLabelWidth,
  );
  height += whyLines.length * 22;

  height += PADDING;

  return { height, imageWidth, imageHeight, exampleLines, whyLines, exampleLabelWidth, whyLabelWidth };
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

export async function renderEndingCardBlob(
  content: EndingCardContent,
): Promise<Blob> {
  const photo = await loadImage(content.imageSrc);

  const measureCanvas = document.createElement("canvas");
  const measureCtx = measureCanvas.getContext("2d");
  if (!measureCtx) throw new Error("Canvas not supported");

  const layout = measureBlock(measureCtx, content, photo);

  const scale = 2;
  const canvas = document.createElement("canvas");
  canvas.width = CARD_WIDTH * scale;
  canvas.height = layout.height * scale;

  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas not supported");

  ctx.scale(scale, scale);

  ctx.fillStyle = "#f7f3ed";
  drawRoundedRect(ctx, 0, 0, CARD_WIDTH, layout.height, 16);
  ctx.fill();

  ctx.strokeStyle = "rgba(214, 211, 209, 0.5)";
  ctx.lineWidth = 1;
  drawRoundedRect(ctx, 0.5, 0.5, CARD_WIDTH - 1, layout.height - 1, 16);
  ctx.stroke();

  let y = PADDING;
  const centerX = CARD_WIDTH / 2;

  ctx.textAlign = "center";
  ctx.fillStyle = "#78716c";
  ctx.font = "600 11px system-ui, sans-serif";
  ctx.fillText(content.yourResults.toUpperCase(), centerX, y);
  y += 28;

  ctx.fillStyle = "#292524";
  ctx.font = "bold 30px Georgia, 'Times New Roman', serif";
  ctx.fillText(content.title, centerX, y);
  y += 36;

  ctx.fillStyle = "#57534e";
  ctx.font = "italic 18px Georgia, 'Times New Roman', serif";
  ctx.fillText(content.tagline, centerX, y);
  y += 28;

  ctx.fillStyle = "#78716c";
  ctx.font = "12px system-ui, sans-serif";
  ctx.fillText(content.conditionLabel, centerX, y);
  y += 32;

  const frameX = centerX - layout.imageWidth / 2 - 16;
  const frameY = y;
  const frameW = layout.imageWidth + 32;
  const frameH = layout.imageHeight + 32;

  ctx.fillStyle = "#e8e0d4";
  drawRoundedRect(ctx, frameX, frameY, frameW, frameH, 12);
  ctx.fill();

  ctx.strokeStyle = "#57534e";
  ctx.lineWidth = 5;
  drawRoundedRect(ctx, frameX, frameY, frameW, frameH, 12);
  ctx.stroke();

  ctx.fillStyle = "#57534e";
  ctx.fillRect(centerX - 40, frameY - 6, 80, 8);

  const imageX = centerX - layout.imageWidth / 2;
  const imageY = frameY + 16;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(imageX - 2, imageY - 2, layout.imageWidth + 4, layout.imageHeight + 4);
  ctx.drawImage(photo, imageX, imageY, layout.imageWidth, layout.imageHeight);

  y = frameY + frameH + 28;
  ctx.textAlign = "left";

  ctx.fillStyle = "#292524";
  ctx.font = "600 14px system-ui, sans-serif";
  ctx.fillText(content.athleteExampleLabel, PADDING, y);

  ctx.fillStyle = "#57534e";
  ctx.font = "14px system-ui, sans-serif";
  const exampleBody = layout.exampleLines;
  exampleBody.forEach((line, index) => {
    const lineY = y + index * 22;
    const x = index === 0 ? PADDING + layout.exampleLabelWidth : PADDING;
    ctx.fillText(line, x, lineY);
  });
  y += exampleBody.length * 22 + 12;

  ctx.fillStyle = "#292524";
  ctx.font = "600 14px system-ui, sans-serif";
  ctx.fillText(content.whyLabel, PADDING, y);

  ctx.fillStyle = "#57534e";
  ctx.font = "14px system-ui, sans-serif";
  const whyBody = layout.whyLines;
  whyBody.forEach((line, index) => {
    const lineY = y + index * 22;
    const x = index === 0 ? PADDING + layout.whyLabelWidth : PADDING;
    ctx.fillText(line, x, lineY);
  });

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("Failed to create image"));
    }, "image/png");
  });
}
