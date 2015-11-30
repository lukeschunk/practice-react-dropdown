var options = {
    thumbnailData:
    [
        {
            title: "show courses",
            number: 12,
            header: 'learn react',
            description: "something something something something something",
            imageUrl: "http://daynin.github.io/clojurescript-presentation/img/react-logo.png"
        },
        {
            title: "Our Courses",
            number: 24,
            header: 'learn gulp',
            description: "something something something something something",
            imageUrl: "https://cms-assets.tutsplus.com/uploads/users/45/posts/20903/preview_image/gulp-preview.png"
        }

    ]
};

var element = React.createElement(ThumbnailList, options);
React.render(element, document.body);

var Badge = React.createClass({displayName: "Badge",

    render: function() {
        return React.createElement("button", {className: "btn btn-primary", type: "button"}, " ", this.props.title, " ", React.createElement("span", {className: "badge"}, " ", this.props.number, " "), " ")
    }
});

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
    render: function() {
        var list = this.props.thumbnailData.map(function(thumbnailProps) {
            return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
        });

        return React.createElement("div", null,
                list
            )
    }
})

var Thumbnail = React.createClass({displayName: "Thumbnail",
    render: function() {
        return  React.createElement("div", {className: "col-sm-6 col-md-4"},
                    React.createElement("div", {className: "thumbnail"},
                        React.createElement("img", {src: this.props.imageUrl}, " "),
                            React.createElement("div", {className: "caption"},
                            React.createElement("h3", null, this.props.header),
                            React.createElement("p", null, " ", this.props.description),
                            React.createElement("p", null,
                                React.createElement(Badge, {title: this.props.title, number: this.props.number})
                            )
                  )
                )
              )
    }

});
