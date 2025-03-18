// flattening an object is most ask js questions in the interview
/**
 * Its checks our concept of recursion
 *  // input
        var user = {
        name: "Vishal",
        address: {
            primary: {
            house: "109",
            street: {             
                main: "21",
                cross: "32"
            }
            }
        }
        };
 *  //output
        {
        user_name: "Vishal",
        user_address_primary_house: "109",
        user_address_primary_street_main: "21",
        user_address_primary_street_cross: "32",
        }
 */

const initObj = {
  name: 'Vishal',
  address: {
    primary: {
      house: '109',
      street: {
        main: '21',
        cross: '32',
      },
    },
  },
};

const flattenObj={}

function flattenObjFun(obj,keyName){
    for (let key of Object.keys(obj)){
        let new_key_name=`${keyName}_${key}`
        if (typeof obj[key]==='object'){
            flattenObjFun(obj[key],new_key_name)
        }
        else{
            flattenObj[new_key_name]=obj[key]
        } 
    }
}

flattenObjFun(initObj,'user')
console.log(flattenObj)
