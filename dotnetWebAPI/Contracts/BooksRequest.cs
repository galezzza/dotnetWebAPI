namespace dotnetWebAPI.Contracts
{
    public record BooksRequest(
        string Title,
        string Description,
        decimal Price);
}