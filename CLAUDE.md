# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Lively Wallpaper widget that displays rotating quotes. It's a pure frontend project with no build system, dependencies, or tests.

## Development

No build or run commands exist. To test changes, load the widget in Lively Wallpaper.

**Key files:**
- `index.html` - Widget UI, styles, and JavaScript logic (single-file application)
- `LivelyProperties.json` - Defines user-configurable properties and default quotes
- `LivelyInfo.json` - Widget metadata for Lively Wallpaper

## Architecture

The widget uses Lively Wallpaper's property listener API (`window.livelyPropertyListener`) to receive configuration changes from the host application. Properties defined in `LivelyProperties.json` are passed to this listener when users adjust settings.

Quote rotation uses a deterministic seed based on current time (date, hour, or minute depending on mode) to select which quote to display, ensuring the same quote shows across refreshes within the update interval.

## Quote Format

Quotes are stored in `LivelyProperties.json` and editable via Lively's settings panel. Format: `Quote text | Author Name` (one per line).

## Claude Code Hooks

The `.claude/settings.json` contains a PostToolUse hook that automatically creates `QuotesWidget.zip` after any Edit or Write operation. This zip includes all files needed for distribution:
- index.html
- LivelyProperties.json
- LivelyInfo.json
- thumbnail.jpg

**Git guidance:**
- `.claude/settings.json` - hooks only, safe to commit
- `.claude/settings.local.json` - user permissions, should be gitignored
