let convert = require('convert-units');
  /*toConvert=process.argv[0];
                sourceUnit=process.argv[2];
                targetUnit=process.argv[3];*/
       
        /*solution = convert(process.argv[3]).from(process.argv[4]).to(process.argv[6]);
        //process.stdout.write('From' + process.argv[1] + ' ' + process.argv[2] + ' ' + constString + ' ' + solution + ' ' + process.argv[4]);
        process.stdout.write(solution);*/

        if(process.argv.length == 6 ){

                console.log(process.argv[2] + " " + process.argv[3] + " are " + convert(process.argv[2]).from(process.argv[3]).to(process.argv[5]) + " " +  process.argv[5])
        }else{

                console.log("invalid input!");
        }
        

