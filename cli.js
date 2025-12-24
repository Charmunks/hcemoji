#!/usr/bin/env node

const { program } = require("commander");
const { viewEmoji } = require("./view.cmd.js");
const { download } = require("./download.cmd.js");

program
  .name("hcemoji")
  .description("CLI for viewing or downloading Hack Club slack emojis")
  .version("1.0.0");

program
  .command("view <emojiName>")
  .description("View an emoji in your terminal")
  .action(viewEmoji)

program
  .command("download <emojiName> <outputFilename>")
  .description("Download an emoji")
  .action(download)


program.parse();
