function comparator(obj1,obj2){
    //Loop through properties in object 1
    if ((typeof (obj1) !== 'function' && typeof (obj2) === 'function') || (typeof (obj1) === 'function' && typeof (obj2) !== 'function')) {
        return false;
    }
    else if (typeof (obj1) === 'function' && typeof (obj2) === 'function') {
        if (obj1.toString() == obj2.toString()) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        
        for (var p in obj1) {
            //Check property exists on both objects
            if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false;
            
            switch (typeof (obj1[p])) {
                //Deep compare objects
                case 'object':
                    if ((obj1[p] !== null && obj2[p] === null) || (obj1[p] === null && obj2[p] !== null)){
                        return false;
                    }
                    else{
                        if (!comparator(obj1[p], obj2[p])) return false;
                    }
                    break;                 
                //Compare function code
                case 'function':
                    if (typeof (obj2[p]) == 'undefined' || (p != 'compare' && obj1[p].toString() != obj2[p].toString())) return false;
                    break;
                //Compare values
                default:
                    if (obj1[p] !== obj2[p]) return false;
            }
        }

        //Check object 2 for any extra properties
        for (var p in obj2) {
            if (typeof (obj1[p]) == 'undefined') return false;
        }
        return true;
    }
}

module.exports.comparator = comparator;