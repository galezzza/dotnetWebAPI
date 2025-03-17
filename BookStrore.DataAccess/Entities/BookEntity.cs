namespace BookStore.DataAccess.Entities
{
    public class BookEntity
    {
        public Guid Id { get; set; }
        public String Title { get; set; } = string.Empty;
        public String Description { get; set; } = string.Empty;
        public decimal Price { get; set; }

    }
}
