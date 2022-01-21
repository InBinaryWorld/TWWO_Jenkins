package pwr.diplomaproject.vagrant2.web

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import pwr.diplomaproject.vagrant2.application.MessageApplicationService
import pwr.diplomaproject.vagrant2.application.MessageForm
import pwr.diplomaproject.vagrant2.domain.Message

@RestController
@RequestMapping("/message")
class MessageController
@Autowired constructor(private val messageApplicationService: MessageApplicationService){

    @GetMapping
    fun getAll(): List<Message> = messageApplicationService.getAllMessages()

    @PostMapping
    fun add(@RequestBody form: MessageForm): Message = messageApplicationService.addMessage(form)

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: Long) = messageApplicationService.delete(id)
}