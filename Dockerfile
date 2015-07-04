FROM google/nodejs

EXPOSE 12616

WORKDIR /etc/services/dmcloud_repo
ADD mock .
RUN ["npm", "install"]

ENTRYPOINT ["node", "index.js"]
