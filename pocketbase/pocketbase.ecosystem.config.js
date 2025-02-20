module.exports = {
    apps : [{
      name        : "pocketbase", 
      script      : "./pocketbase",
      args        : ["serve"],      
      cwd         : "./",          
      instances   : 1,              
      autorestart : true,          
      watch       : false,          
      max_memory_restart : "512M",
      env: {                       
        NODE_ENV: "production"    
      },

      error_file: "./logs/pocketbase-error.log",
      out_file: "./logs/pocketbase-out.log"
    }]
  };