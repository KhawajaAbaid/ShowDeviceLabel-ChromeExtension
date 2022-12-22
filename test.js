const token = "AAAAAAAAAAAAAAAAAAAAALHcbgEAAAAAg4cNvUSsOuNDeZCqLyoi6dfI2u8%%3DXTA7nIFH5RbqJmPFSGl5ulEbYPBbexC9eXL6DXoN6es4zgZx3M";
ids = ["1605053038217105408"];
$.ajax({ 
    type : "GET", 
    url : "https://api.twitter.com/2/tweets?ids=" + ids,
    headers: {"User-Agent": "v2TweetLookupJS", "authorization": `Bearer ${token}`
    },
    success : function(result) { 
        //set your variable to the result 
        console.log(result)
    }, 
    error : function(result) { 
      //handle the error 
      console.log("oh no error")
    } 
});

console.log("did it work?");