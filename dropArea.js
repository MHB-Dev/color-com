  // Filter: Prioritize saturated
            /*if(pixelStorageArr.length > 10){
                pixelStorageArr = pixelStorageArr.filter((current, index, arr) => {
                    const hasSimilarHue = arr.slice(0, index).some(prev => 
                        Math.abs(prev.h - current.h) <= 7
                    );
                    
                    if (!hasSimilarHue) return true;
                    
                    // For colors with similar hue, keep the one with lightness closest to 50
                    const similarColors = arr.filter(color => 
                        Math.abs(color.h - current.h) <= 5
                    );
                    
                    const closestToMidLightness = similarColors.reduce((closest, color) => {

                        if( color.h >= 30 &&  color.h <= 55){
                            return Math.abs(color.l - 90) < Math.abs(closest.l - 90) ? color : closest
                        } else {
                            return Math.abs(color.l - 50) < Math.abs(closest.l - 50) ? color : closest
                        }

                    });
                    
                    return current === closestToMidLightness;
                });
            }*/

            // Filter: Prioritize saturated
            /*if(pixelStorageArr.length > 10){
                pixelStorageArr = pixelStorageArr.filter((current, index, arr) => {
                    const hasSimilarHue = arr.slice(0, index).some(prev => 
                        Math.abs(prev.h - current.h) <= 18
                    );
                    
                    if (!hasSimilarHue) return true;
                    
                    // For colors with similar hue, keep the one with lightness closest to 50
                    const similarColors = arr.filter(color => 
                        Math.abs(color.h - current.h) <= 18
                    );
                    
                    const closestToMidLightness = similarColors.reduce((closest, color) => 
                        Math.abs(color.l - 75) < Math.abs(closest.l - 75) ? color : closest
                    );
                    
                    return current === closestToMidLightness;
                });
            }*/

            // Cluster pixels
            /*if(pixelStorageArr.length > 10){
                pixelStorageArr = removeDuplicates(pixelStorageArr, 2);
            }
            console.log('Cluster pixels 1',pixelStorageArr);*/

            // Cluster pixels
            /*if(pixelStorageArr.length > 10){
                pixelStorageArr = removeDuplicates(pixelStorageArr, 3);
            }*/ 

/*

            // Eliminate similar wishiwashi
            if(pixelStorageArr.length > 10){
                let newPixelStorageArr = [];
                pixelStorageArr.forEach( px => { if(px.s > 20 || px.l < 55) newPixelStorageArr.push(px) })
                pixelStorageArr = newPixelStorageArr;
            }

            // Eliminate weaker colors : Last resort
            let iterator = 0;
            while (pixelStorageArr.length > 10){
                let newPixelStorageArr = [];
                pixelStorageArr.forEach( px => { if(px.s > (20 + iterator) || px.l < (55 - iterator)) newPixelStorageArr.push(px) })
                pixelStorageArr = newPixelStorageArr;
                iterator++;
                colorAdjustments = true;
            }
                */

            // Special greens?

            
            //return pixelStorageArr.sort((a,b) => {return b.count-a.count});