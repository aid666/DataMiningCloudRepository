FROM google/nodejs

EXPOSE 12616

WORKDIR /etc/services/dmcloud_repo
ADD mock .
RUN ["npm", "install"]

//ENTRYPOINT ["npm", "start"]
ENTRYPOINT ["node", "index.js"]
