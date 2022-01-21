package pwr.diplomaproject.vagrant2.domain

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
data class Message(
    @Id @GeneratedValue val id: Long = 0L,
    val message: String
)