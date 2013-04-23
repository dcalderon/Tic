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
                        '<td>1</td>',
                        '<td>2</td>',
                        '<td>3</td>',
                    '</tr>',
                    '<tr>',
                        '<td>4</td>',
                        '<td>5</td>',
                        '<td>6</td>',
                    '</tr>',
                    '<tr>',
                        '<td>7</td>',
                        '<td>8</td>',
                        '<td>9</td>',
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
