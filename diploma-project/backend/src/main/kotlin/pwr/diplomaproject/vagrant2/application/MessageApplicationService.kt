package pwr.diplomaproject.vagrant2.application

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import pwr.diplomaproject.vagrant2.domain.Message
import pwr.diplomaproject.vagrant2.domain.MessageRepository

@Service
class MessageApplicationService
@Autowired constructor(private val messageRepository: MessageRepository){

    fun getAllMessages(): List<Message> = messageRepository.findAll();

    fun addMessage(form: MessageForm): Message = messageRepository.save(Message(message = form.message))

    fun delete(id: Long) = messageRepository.deleteById(id)
}