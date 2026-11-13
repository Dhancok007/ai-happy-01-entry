// ai-happy-01 entry program (Node 22, standard library only).
// The artwork is the entry.png beside this file; this program delivers it
// to the output directory the harness designates (MAKEFUN_OUTPUT_DIR when
// run locally, /output inside the grader's container).

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
// The judge sees exactly these bytes, so copy the PNG untouched.
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
