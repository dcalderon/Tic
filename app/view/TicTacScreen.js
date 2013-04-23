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
                title: 'TicTacToe',
                iconCls: 'home',
                xtype: 'toucher',
                description: 'Is this working at all?',
            },
            // {
            //     title: 'test',
            //     iconCls: 'home',
            //     xtype: 'vertical',
            // }
        ]
    }
});