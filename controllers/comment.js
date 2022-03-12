const Comment = require("../models/comment.js");

function addComment(input, ctx){
    // console.log(input);
    // console.log(ctx);
    try {
        const comment = new Comment({
            idPublication: input.idPublication,
            idUser: ctx.user.id,
            comment: input.comment,
        });
        comment.save();
        return comment;
    } catch (error) {
        console.log(error);
    }
    return null;
}

async function getComments(idPublication){
    const result = await Comment.find({idPublication}).populate("idUser");
    // console.log(result);
    return result;
};


module.exports = {
    addComment,
    getComments,
};