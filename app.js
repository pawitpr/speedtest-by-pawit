const speedTest = require('speedtest-net');
const cliProgress = require('cli-progress');
// we have include async for wait for action it took a time
// we have display through a console.log()
//thanks for using this let took a demo
(async () => {
  try {
// random digit
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
  
    const cliProgress = require('cli-progress');

// create a new progress bar instance and use shades_classic theme
        const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

        bar1.start(200,getRandomInt(100));
        
    console.log(await speedTest(), '\n this is a result of speedtest');

  } catch (err) {
    console.log(err.message);
   
  } finally {
    const cliProgress = require('cli-progress');
     console.log('now exited , if not app is crash pls send a key CTR C')
     console.log('Thanks you for using');
     const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
     bar1.start(200,200);
     bar1.stop();
     console.log('bye bye')
     process.exit(0);
  } 
  

})();