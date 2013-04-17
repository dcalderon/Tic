Ext.define("Tic.view.TicTacScreen", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
        fullscreen: true,
        tabBarPosition: 'bottom',
        items: [
            {
                title: 'Home',
                iconCls: 'home',
                cls: 'home',
                styleHtmlContent: true,
                html: [
                    'on click let us change'
                ].join("")
            },
            {
                title: 't',
                xtype: 'image',
                src: 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png',
            },
            {
                title: 'TicTacToe',
                xtype: 'toucher',
                description: 'Is this working at all?',
                //src: 'http://diegocalderon.info/travels/wp-content/uploads/2012/07/Prague43.jpg',
                //used the src.sencha.io to resize image...
                //src: 'http://src.sencha.io/740/500/http://diegocalderon.info/travels/wp-content/uploads/2012/07/Prague43.jpg',
            }
        ]
    }
});
// 
// lets have three images...
// http://src.sencha.io/740/500/http://diegocalderon.info/travels/wp-content/uploads/2012/08/Brussels40.jpg
// http://src.sencha.io/740/500/http://diegocalderon.info/travels/wp-content/uploads/2012/07/Berlin15.jpg
// http://src.sencha.io/740/500/http://diegocalderon.info/travels/wp-content/uploads/2012/07/Prague43.jpg