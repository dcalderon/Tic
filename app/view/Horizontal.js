Ext.create('Ext.Container', {
    fullscreen: true,
    layout: 'vbox',
    xtype: 'horizontal',
    items: [
        {
            xtype: 'toucher',
            //html: 'message list',
            flex: 1
        },
        {
            xtype: 'panel',
            html: 'message preview',
            flex: 1
        },
        {
            xtype: 'panel',
            html: 'message preview',
            flex: 1
        }
    ]
});