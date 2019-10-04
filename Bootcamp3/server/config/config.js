//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://guest:cen3031access@cen3031-project-xl0qa.mongodb.net/test?retryWrites=true&w=majority'
  }, 
  openCage: {
    key: '59e12b631730485a8b807d963352dcff' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};