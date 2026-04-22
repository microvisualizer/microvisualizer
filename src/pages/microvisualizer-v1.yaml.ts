import {readFileSync} from 'node:fs';

export function GET() {
  return new Response(readFileSync('./api/microvisualizer-v1.yaml', 'utf-8'), {
    headers: {'Content-Type': 'application/yaml'},
  });
}
