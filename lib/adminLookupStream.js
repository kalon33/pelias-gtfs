var adminLookup = require('pelias-wof-admin-lookup');
var logger = require( 'pelias-logger' ).get( 'pelias-GTFS' );

function createAdminLookupStream() {
  logger.info( 'Setting up admin value lookup stream.' );
  return adminLookup.create();
}

module.exports = {
  create: createAdminLookupStream
};
