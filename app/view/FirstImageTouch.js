Ext.define('Tic.view.FirstImageTouch', {
    extend: 'Ext.Img',
    xtype: 'toucher',
    config: {
        title: null,
        description: null
    },

    //sets up our tap event listener
    initialize: function() {
        this.callParent(arguments);

        this.element.on('tap', this.onTap, this);
    },

    //this function is called whenever you tap on the image
    onTap: function() {
        Ext.Msg.alert(this.getTitle(), this.getDescription());
    }
});

// now we defined this with the xtype.
// Lets make an xtype for tic tac toe and then can design each thing modularly?
// We'll need a a container for the overall then for each spot we'll have a 
// square with an image.
// This tictactoe container can hold the logic.