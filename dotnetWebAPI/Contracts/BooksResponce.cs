namespace dotnetWebAPI.Contracts
{
    public record BooksResponce(
        Guid Id,
        string Title,
        string Description,
        decimal Price);
}