function ContactItem({contact}) {
    console.log(contact);
    return (
    <>
    <p>{contact.name}</p>
    </>)
}

export default ContactItem

//дз - 1) mui подорать компонент для contactItem, отобразить все данные
// кнопку удаления без подтверждения
// редактирования кнопка => 1. модалка; 2. переисользовать форму добавления конакта для редактирования