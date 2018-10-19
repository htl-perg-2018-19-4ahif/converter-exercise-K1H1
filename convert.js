//console.log('Not implemented yet!');
let convert = require('convert-units')
let toConvert, sourceUnit, constString, targetUnit, solution;
constString='to';
        /*toConvert=process.argv[0];
        sourceUnit=process.argv[2];
        targetUnit=process.argv[3];*/
        solution= convert(process.argv[1]).from(process.argv[2]).to(process.argv[4])
        process.stdout.write('From' + toConvert+ ' '+sourceUnit+' '+constString+ ' '+solution+' '+targetUnit );

