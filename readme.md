Why is it important to whitelist IP addresses in a real-world production environment? 
What are the risks of allowing connections from anywhere (0.0.0.0/0)?

    It allows spefic IP addresses bypass firewalls, I'm guessing this makes certain 
    processes more efficient, if trusted websites/databases with wanted information doesn't
    have to be stopped by a firewall or other protecive programs everytime it runs. 
    The biggest problem with allowing connections from anywhere, is that the public internet
    isn't a very safe place, and you increase the chances of bad stuff and bad people ruining
    your hardwork (code). 

What is the purpose of the dotenv package? What other methods could you use to manage 
environment variables in a production environment (e.g., in a cloud hosting service)?

    The dotenv package lets you use the discreet information in ones' .env without
    having to expose the actual contentds of the .env file, turning them into environment
    variables.

    Alternatives to environment vairables would possibly include secret managers (like Google Secret Manager) 
    and encrypted environment tools (like Envio).

    reading: 
    https://dev.to/dangtony98/doing-much-better-than-your-env-file-46bg

If your application failed to connect, what are the first few steps you would take to debug the issue?

    I don't think there was an error to connect. If there was, it was last week and I can
    no longer remember it. 