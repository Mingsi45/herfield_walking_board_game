import type { Ending } from "../../data/endings";
import type { GameEvent, Resource, SpecialTile } from "../../data/events";
import type { RuleStep } from "../../data/ruleSteps";
import type { TileType } from "../../data/board";
import type { PlayerStats } from "../gameStats";
import {
  zhEndings,
  zhEvents,
  zhResources,
  zhRuleSteps,
  zhSpecialTiles,
  zhSpeechLines,
  zhStatLabels,
  zhTileLabels,
} from "./locales/zh/gameContent";
import { enUi } from "./locales/en/ui";
import { zhUi } from "./locales/zh/ui";
import type { Locale } from "./types";

export function getUi(locale: Locale) {
  return locale === "zh" ? zhUi : enUi;
}

export function getStatLabels(locale: Locale): Record<keyof PlayerStats, string> {
  if (locale === "en") {
    return {
      satisfaction: "Satisfaction",
      energy: "Energy",
      salary: "Salary",
      health: "Health",
    };
  }
  return zhStatLabels;
}

export function getTileLabel(locale: Locale, type: TileType): string {
  if (locale === "en") {
    const en: Record<TileType, string> = {
      start: "Start",
      event: "Event",
      resource: "Resource",
      special: "Special",
    };
    return en[type];
  }
  return zhTileLabels[type];
}

export function localizeEvent(event: GameEvent, locale: Locale): GameEvent {
  if (locale === "en") return event;
  const t = zhEvents[event.id];
  if (!t) return event;
  return {
    ...event,
    title: t.title,
    description: t.description,
    choices: event.choices.map((choice, i) => ({
      ...choice,
      text: t.choices[i] ?? choice.text,
    })),
  };
}

export function localizeResource(
  resource: Resource,
  index: number,
  locale: Locale,
): Resource {
  if (locale === "en") return resource;
  const t = zhResources[index];
  if (!t) return resource;
  return { ...resource, title: t.title, description: t.description };
}

export function localizeSpecialTile(
  tile: SpecialTile,
  index: number,
  locale: Locale,
): SpecialTile {
  if (locale === "en") return tile;
  const t = zhSpecialTiles[index];
  if (!t) return tile;
  return { ...tile, title: t.title, description: t.description };
}

export function localizeEnding(ending: Ending, locale: Locale): Ending {
  if (locale === "en") return ending;
  const t = zhEndings[ending.id];
  if (!t) return ending;
  return {
    ...ending,
    title: t.title,
    tagline: t.tagline,
    conditionLabel: t.conditionLabel,
    athleteExample: t.athleteExample,
    athleteWhy: t.athleteWhy,
  };
}

export function localizeRuleStep(step: RuleStep, locale: Locale): RuleStep {
  if (locale === "en") return step;
  const t = zhRuleSteps[step.id];
  if (!t) return step;
  return {
    ...step,
    title: t.title,
    paragraphs: t.paragraphs,
    bullets: t.bullets,
    images: step.images.map((img, i) => ({
      ...img,
      alt: t.imageAlts[i] ?? img.alt,
    })),
  };
}

export function getSpeechLines(locale: Locale): string[] {
  if (locale === "en") {
    return [
      "I'm dying to compete!",
      "I'm wiped out; all I want to do is crash.",
      "Yes! Break's finally here!",
      "Ugh, when can I retire?",
      "Oh no, this opponent's insane!",
      "The match's coming up, I'm so nervous!",
      "Love this new racket so much!",
      "Ouch! Cramp hurts like hell!",
      "This healthy meal's absolutely disgusting!",
    ];
  }
  return zhSpeechLines;
}
