# todolist
+ Call back function : 
    async is a Promist Object.
    await always go with async.
    Example : 
        async b() {
            return true;
        }
        async a() {
            let temp1 = b(); 
            let temp2 = await b(); 
            //temp1 Promise { true }
            //temp2 true
        }
+ Tách : Router views, Router api 
