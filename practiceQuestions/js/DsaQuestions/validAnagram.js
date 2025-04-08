// Check whether the provide string is valid anagram or not 

function isValidAnagram(s,t){
    s=s.split("").sort().join("");
    t=t.split("").sort().join("");
    return s===t
}

//  Another object methods 

function isValidAnagramv2(s,t){
    if(s.length !==t.length) return false

    const obj1={};
    const obj2={};

    for(let i=0;i<s.length;i++){
        obj1[s[i]]=(obj1[s[i]] || 0)+1;
        obj2[t[i]]=(obj2[t[i]] || 0)+1;
    }
    for(let key in obj1){
        if(obj1[key]!==obj2[key]) return false
    }
    return true;
}

console.log(isValidAnagramv2("xyza","axyz"));