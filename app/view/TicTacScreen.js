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
            {
                title: 'HtmlToe',
                iconCls: 'star',
                cls: 'home',
                styleHtmlContent: true,
                html: [
                    '<table width="100%" cellpadding="3" cellspacing="3">',
                    '<table>',
                    '<tr>',
                        '<td>Test</td>',
                        '<td>Test</td>',
                        '<td>Test</td>',
                    '</tr>',
                    '<tr>',
                        '<td>Test</td>',
                        '<td>Test</td>',
                        '<td>Test</td>',
                    '</tr>',
                    '<tr>',
                        '<td>Test</td>',
                        '<td>Test</td>',
                        '<td>Test</td>',
                    '</tr>',
                    '</table>'
                ].join("")
            }
            // {
            //     title: 'test',
            //     iconCls: 'home',
            //     xtype: 'vertical',
            // }
        ]
    }
});
