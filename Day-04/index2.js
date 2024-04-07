const firstnamechange = (e) =>{
    const val = e.target.value;
    if(val.length>3)
    {
        console.log("correct");
    }
}
const submitForm = (e) =>{
    e.preventDefault();
    // console.log(e);
    const t= e.target;
    const res = {
        hobbies: [],
    };
    for(let i=0; i<t.length; i++)
    {
        const ty = t[i].type;
        if(ty!='submit'){
        
        const vl = t[i].value;
        const nm = t[i].name;
        // console.log(nm,ty,vl);
        if(ty=='checkbox' && t[i].checked)
        {
            res.hobbies.push(vl);
        }
        if(ty!='checkbox')
        {
            res[nm] = vl;
        }
        }
        
    }
    console.log(res);

}