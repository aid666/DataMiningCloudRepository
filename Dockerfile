FROM google/nodejs

EXPOSE 12616

WORKDIR /etc/services/dmcloud_repo
ADD . .
RUN ["npm", "install"]

ENTRYPOINT ["npm", "start"]
