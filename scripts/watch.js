#!/usr/bin/env node --harmony-top-level-await

import { spawn } from 'child_process'

spawn('tsc', ['-p .', '-w'], { stdio: 'inherit' }).ref()
spawn('rollup', ['-wc'], { stdio: 'inherit' }).ref()
