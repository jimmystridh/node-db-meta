var expect = require('chai').expect;
var Table = require('../../lib/mysql/table');
var iface = require('../../lib/table').iface;

describe('mysql table', function () {
  it('should implement all the methods defined in the base table interface', function (done) {
    var t = new Table({ table_name: 'tbl' });
    iface.forEach(function (method) {
      t[method].call(t);
    });
    done();
  });

  it('should create an internal meta property for constructor argument', function (done) {
    var t = new Table({ id: 1, table_name: 'tbl' });
    expect(t.meta).not.to.be.null;
    done();
  });

  it('should implement the getName method', function(done) {
    var t = new Table({ id: 1, table_name: 'tbl' });
    expect(t.getName()).to.equal('tbl');
    done();
  });
});