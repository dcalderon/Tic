Ext.application({
    name: 'Tic',

    requires: [
        'Ext.MessageBox'
    ],
    
    views: ['Main', 'TicTacScreen', 'FirstImageTouch', 'TicTacHTML'], //, 'Vertical', 'Horizontal'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        // Ext.Viewport.add(Ext.create('Tic.view.Main'));
        Ext.Viewport.add(Ext.create('Tic.view.TicTacScreen'));
        // Ext.Viewport.add(Ext.create('Tic.view.FirstImageTouch', {
        //             title: 'Orion Nebula',
        //             description: 'The Orion Nebula is rather pretty',
        //             src: 'http://apod.nasa.gov/apod/image/1202/oriondeep_andreo_960.jpg',
        //             fullscreen: true
        //         })
        //     )
        
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});


/*

    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.


// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': '../touch/src',
    'MyApp': 'app'
});
//</debug>

Ext.application({
    name: 'MyApp',

    requires: [
        'Ext.MessageBox'
    ],

    views: [
        'Main'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        //Ext.Viewport.add(Ext.create('MyApp.view.Main'));
                //this is the Panel we'll be adding below


        Ext.define('FirstImageTouch', {
            extend: 'Ext.Img',
            xtype: 'toucher',
            config: {
                title: null,
                src: 'resources/images/blank.jpg',
                description: null,
                count: 1,
                choices: ['resources/images/x.jpg',
                            'resources/images/o.jpg',
                            'resources/images/blank.jpg']
            },

            //sets up our tap event listener
            initialize: function() {
                this.callParent(arguments);

                this.element.on('tap', this.onTap, this);
            },

            //this function is called whenever you tap on the image
            onTap: function() {
                //Ext.Msg.alert(this.getTitle(), this.getDescription());
                this.setCount(this.getCount() + 1)
                this.setSrc(this.getChoices()[(this.getCount()%3)])
            }
        });



        var sqr1 = Ext.create('FirstImageTouch', {});
        var sqr2 = Ext.create('FirstImageTouch', {});
        var sqr3 = Ext.create('FirstImageTouch', {});

        var sqr4 = Ext.create('FirstImageTouch', {});
        var sqr5 = Ext.create('FirstImageTouch', {});
        var sqr6 = Ext.create('FirstImageTouch', {});

        var sqr7 = Ext.create('FirstImageTouch', {});
        var sqr8 = Ext.create('FirstImageTouch', {});
        var sqr9 = Ext.create('FirstImageTouch', {});



        var mainPanel = Ext.create('Ext.Panel', {
            fullscreen: true,

            layout: 'vbox',
            defaults: {
                flex: 1
            }
        });

        //this is the Panel we'll be adding to
        var topPanel = Ext.create('Ext.Panel', {

            layout: 'hbox',
            defaults: {
                flex: 1
            },

        });

        var middlePanel = Ext.create('Ext.Panel', {

            layout: 'hbox',
            defaults: {
                flex: 1
            },

        });

        var bottomPanel = Ext.create('Ext.Panel', {

            layout: 'hbox',
            defaults: {
                flex: 1
            },
        });


        //now we add the first panel inside the second
        topPanel.add(sqr1);
        topPanel.add(sqr2);
        topPanel.add(sqr3);

        middlePanel.add(sqr4);
        middlePanel.add(sqr5);
        middlePanel.add(sqr6);

        bottomPanel.add(sqr7);
        bottomPanel.add(sqr8);
        bottomPanel.add(sqr9);

        mainPanel.add(topPanel);
        mainPanel.add(middlePanel);
        mainPanel.add(bottomPanel);



   // launch
    // application()

    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});


*/
