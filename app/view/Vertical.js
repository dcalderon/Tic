Ext.create('Ext.Container', {
    fullscreen: true,
    layout: 'hbox',
    xtype: 'vertical',
    items: [
        {
            xtype: 'horizontal',
            html: 'message list',
            flex: 1
        },
        {
            xtype: 'horizontal',
            html: 'message preview',
            flex: 1
        },
        {
            xtype: 'horizontal',
            html: 'message preview',
            flex: 1
        }
    ]
});