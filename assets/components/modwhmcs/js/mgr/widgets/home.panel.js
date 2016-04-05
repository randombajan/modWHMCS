modWHMCS.panel.Home = function(config) {
    config = config || {};
    Ext.apply(config,{
        border: false
        ,baseCls: 'modx-formpanel'
        ,cls: 'container'
        ,layout: 'anchor'
        ,hideMode: 'offsets'
        ,items: [{
            html: '<div id="modwhmcs-logo-wrapper"><img id="modx-modwhmcs-logo" alt=\'MODX Logo\' src=\''+MODx.config["modwhmcs.assets_url"]+'img/modx.png\'><img id="whmcs-logo" alt=\'WHMCS Logo\' src=\''+MODx.config["modwhmcs.assets_url"]+'img/whmcs-logo.png\'></div>'
            ,border: false
            ,cls: 'modx-page-header'
        },{
            xtype: 'modx-tabs'
            ,defaults: { border: false ,autoHeight: true }
            ,border: true
            ,activeTab: 0
            ,hideMode: 'offsets'
            ,items: [{
                title: _('modwhmcs.items')
                ,items: [{
                    html: '<p>'+_('modwhmcs.intro_msg')+'</p>'
                    ,border: false
                    ,layout:'anchor'
                    ,bodyCssClass: 'panel-desc'
                }/*,{
                    xtype: 'modwhmcs-grid-items'
                    ,preventRender: true
                    ,cls: 'main-wrapper'
                }*/,{
                    xtype: 'modwhmcs-grid-tickets'
                    ,preventRender:true
                    ,cls: 'main-wrapper'
                }]
            }]
        }]
    });
    modWHMCS.panel.Home.superclass.constructor.call(this,config);
};
Ext.extend(modWHMCS.panel.Home,MODx.Panel);
Ext.reg('modwhmcs-panel-home',modWHMCS.panel.Home);
