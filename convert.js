let convert = require('convert-units');
if (process.argv.length == 6 || process.argv[3] != 'm' || process.argv[3] != 'cm' || process.argv[3] != 'mm' || process.argv[3] != 'kg' || process.argv[3] != 'kg'
|| process.argv[5] != 'm' || process.argv[5] != 'cm' || process.argv[5] != 'mm') {
        //process.stdout.write((process.argv[2] + " " + process.argv[3] + " are " + convert(process.argv[2]).from(process.argv[3]).to(process.argv[5]) + " " + process.argv[5]);
        console.log(process.argv[2] + " " + process.argv[3] + " are " + convert(process.argv[2]).from(process.argv[3]).to(process.argv[5]) + " " + process.argv[5])
} else {
        //process.stdout.write('Invalid input! -> Check number of arguments!');
        console.log('Invalid input!');
}


