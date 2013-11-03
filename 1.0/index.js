/**
 * @fileoverview 
 * @author 栋寒<donghan@taobao.com>
 * @module contacts
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 
     * @class Contacts
     * @constructor
     * @extends Base
     */
    function Contacts(comConfig) {
        var self = this;
        //调用父类构造函数
        Contacts.superclass.constructor.call(self, comConfig);
    }
    S.extend(Contacts, Base, /** @lends Contacts.prototype*/{

    }, {ATTRS : /** @lends Contacts*/{

    }});
    return Contacts;
}, {requires:['node', 'base']});



