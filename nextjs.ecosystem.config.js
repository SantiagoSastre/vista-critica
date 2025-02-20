module.exports = {
    apps: [{
      name: "vista-critica",
      script: "next",
      args: ["start"],
      cwd: "./",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production"
      },
      error_file: "./logs/next-error.log",
      out_file: "./logs/next-out.log"
    }]
  };