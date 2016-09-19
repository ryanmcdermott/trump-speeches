
var fs        = require('fs'),
    orig_data = fs.readFileSync('./speeches.txt');
    fix_orig  = `${orig_data}`.trim()
                              .replace(/\r\n/g, '\n')
                              .replace(/  +/g, ' ')
                              .replace(/’/g, "'")
                              .replace(/—/g, "-"),
    split     = fix_orig.split(/SPEECH [0-9]+\n/)
                        .filter(s => s.length > 0),
    fix_split = split.map(
                    s => s.trim()
                          .split(/\n\n\n+/)
                          .map(ss => ss.trim())
                          .join('\n\n')
                );

if (!(fs.stat('./speeches'))) { fs.mkdir('./speeches'); }
fix_split.map( (f,i) => fs.writeFileSync(`./speeches/speech${i}.txt`, fix_split[i]));