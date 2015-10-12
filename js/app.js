var github_token = //GITHUB ACCESS TOKEN GOES HERE;
var github_connection;

function load_javascript(script_url,function_to_run_onload){

    var document_head = document.getElementsByTagName('head')[0];
    var document_script = document.createElement('script');
    
    document_script.type = 'text/javascript';
    document_script.src = script_url;
    document_script.onready = function_to_run_onload;
    document_script.addEventListener('onload',function(event){
        function_to_run_onload;
    });
    
    document_head.appendChild(document_script);

}

document.addEventListener('DOMContentLoaded',function(){
 
    console.log('DOMContnetLoaded');
    
    load_javascript('/js/github_api.js',function(event){
        
    });

});


document.addEventListener('readystatechange',function(event){
    
    if(document.readyState === 'complete'){
        
        github_connection = new Github({
              token: github_token,
              auth: "oauth"
            });
    
    
    }
    
});


