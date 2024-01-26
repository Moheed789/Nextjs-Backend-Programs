import { users } from "../data";

export async function PUT(
    request: Request,
    {params}: {params: {id: string}}
){
    const body = await request.json();
    const {name, full_name, email, age} = body;
    const index = users.findIndex(
        (user) => user.id === parseInt(params.id)
    );
    users[index].name = name
    users[index].full_name = full_name
    users[index].email = email
    users[index].age = age
    return Response.json(users[index])
};

export async function DELETE(
    request: Request,
    {params}: {params: {id: string}}
){
    const index = users.findIndex(
        (user) => user.id === parseInt(params.id)
    );
    const deleteUser = users[index];
    users.splice(index, 1);
    return Response.json(deleteUser);
} 