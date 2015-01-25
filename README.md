Woodchuck.io Website
=====================





Deployment
----------

Deployment is pretty easy.
First, you need to have an `aws_deployment_credentials.json` file (provided by Scott) in the root of the project. This cannot be included in the repository (thus the exclusion in the `.gitignore` file) as it is the private key to deploy to the Amazon S3 bucket.
 Once you have that file, deploying is at easy as this.

    grunt deploy

This will perform the build as well as the deployment. 
Be careful to only deploy from the master branch with everything checked in - or whatever. I don't really care that much. :-P 