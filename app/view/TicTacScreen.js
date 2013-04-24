Ext.define("Tic.view.TicTacScreen", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
        fullscreen: true,
        tabBarPosition: 'bottom',
        test: 'hello',
        items: [
            {
                title: 'HtmlToe',
                iconCls: 'star',
                cls: 'home',
                styleHtmlContent: true,
                xtype: 'tic',
                listeners: [
                {
                    element: 'element',
                    delegate: 'td.one',
                    event: 'tap',
                    fn: function() {
                        // Ext.Msg.alert(this.getDescription());
                        var t=this.getSq1();
                        //console.log('One!');
                        var t2 = this.getCounts();
                        t2[0]+=1;
                        console.log(t2);
                        this.setCounts(t2)
                        this.setSq1('<td class="one"><img src="'+this.getChoices()[(t2[0] % 3)]+'" width="100" height="100"></td>');
                        this.setHtml(this.getHtml().replace(t,this.getSq1()));
                    }
                },
                {
                    element: 'element',
                    delegate: 'td.two',
                    event: 'tap',
                    fn: function() {
                        // Ext.Msg.alert(this.getDescription());
                        var t=this.getSq2();
                        //console.log('One!');
                        var t2 = this.getCounts();
                        t2[1]+=1;
                        console.log(t2);
                        this.setCounts(t2)
                        this.setSq2('<td class="two"><img src="'+this.getChoices()[(t2[1] % 3)]+'" width="100" height="100"></td>');
                        this.setHtml(this.getHtml().replace(t,this.getSq2()));
                    }
                },
                {
                    element: 'element',
                    delegate: 'td.three',
                    event: 'tap',
                    fn: function() {
                        // Ext.Msg.alert(this.getDescription());
                        var t=this.getSq3();
                        var t2 = this.getCounts();
                        t2[2]+=1;
                        console.log(t2);
                        this.setCounts(t2)
                        this.setSq3('<td class="three"><img src="'+this.getChoices()[(t2[2] % 3)]+'" width="100" height="100"></td>');
                        this.setHtml(this.getHtml().replace(t,this.getSq3()));
                    }
                },
                {
                    element: 'element',
                    delegate: 'td.four',
                    event: 'tap',
                    fn: function() {
                        // Ext.Msg.alert(this.getDescription());
                        var t=this.getSq4();
                        //console.log('One!');
                        var t2 = this.getCounts();
                        t2[3]+=1;
                        console.log(t2);
                        this.setCounts(t2)
                        this.setSq4('<td class="four"><img src="'+this.getChoices()[(t2[3] % 3)]+'" width="100" height="100"></td>');
                        this.setHtml(this.getHtml().replace(t,this.getSq4()));
                    }
                },
                {
                    element: 'element',
                    delegate: 'td.five',
                    event: 'tap',
                    fn: function() {
                        // Ext.Msg.alert(this.getDescription());
                        var t=this.getSq5();
                        //console.log('One!');
                        var t2 = this.getCounts();
                        t2[4]+=1;
                        console.log(t2);
                        this.setCounts(t2)
                        this.setSq5('<td class="five"><img src="'+this.getChoices()[(t2[4] % 3)]+'" width="100" height="100"></td>');
                        this.setHtml(this.getHtml().replace(t,this.getSq5()));
                    }
                },
                {
                    element: 'element',
                    delegate: 'td.six',
                    event: 'tap',
                    fn: function() {
                        // Ext.Msg.alert(this.getDescription());
                        var t=this.getSq6();
                        //console.log('One!');
                        var t2 = this.getCounts();
                        t2[5]+=1;
                        console.log(t2);
                        this.setCounts(t2)
                        this.setSq6('<td class="six"><img src="'+this.getChoices()[(t2[5] % 3)]+'" width="100" height="100"></td>');
                        this.setHtml(this.getHtml().replace(t,this.getSq6()));
                    }
                },
                {
                    element: 'element',
                    delegate: 'td.seven',
                    event: 'tap',
                    fn: function() {
                        // Ext.Msg.alert(this.getDescription());
                        var t=this.getSq7();
                        //console.log('One!');
                        var t2 = this.getCounts();
                        t2[6]+=1;
                        console.log(t2);
                        this.setCounts(t2)
                        this.setSq7('<td class="seven"><img src="'+this.getChoices()[(t2[6] % 3)]+'" width="100" height="100"></td>');
                        this.setHtml(this.getHtml().replace(t,this.getSq7()));
                    }
                },
                {
                    element: 'element',
                    delegate: 'td.eight',
                    event: 'tap',
                    fn: function() {
                        // Ext.Msg.alert(this.getDescription());
                        var t=this.getSq8();
                        //console.log('One!');
                        var t2 = this.getCounts();
                        t2[7]+=1;
                        console.log(t2);
                        this.setCounts(t2)
                        this.setSq8('<td class="eight"><img src="'+this.getChoices()[(t2[7] % 3)]+'" width="100" height="100"></td>');
                        this.setHtml(this.getHtml().replace(t,this.getSq8()));
                    }
                },
                {
                    element: 'element',
                    delegate: 'td.nine',
                    event: 'tap',
                    fn: function() {
                        // Ext.Msg.alert(this.getDescription());
                        var t=this.getSq9();
                        //console.log('One!');
                        var t2 = this.getCounts();
                        t2[8]+=1;
                        console.log(t2);
                        this.setCounts(t2)
                        this.setSq9('<td class="nine"><img src="'+this.getChoices()[(t2[8] % 3)]+'" width="100" height="100"></td>');
                        this.setHtml(this.getHtml().replace(t,this.getSq9()));
                    }
                },
                ]
            },
            
            // {
            //     title: 'TicTacToe',
            //     iconCls: 'home',
            //     xtype: 'toucher',
            //     description: 'Is this working at all?',
            // },
            // {
            //     title: 'test',
            //     iconCls: 'home',
            //     xtype: 'vertical',
            // }
        ]
    }
});
