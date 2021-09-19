var participants = ["Michael", "Alice", "Bob", "Charlie", "Damian", "Edgar", "Frank", "George"]

var getNumParticipants = (_participants) => _participants.length
var getOffset = (_numParticipants) => Math.floor(Math.random() * (_numParticipants - 2)) + 1
var getReceiverIndex = (_senderIndex, _numParticipants, _offset) => (_senderIndex + _offset) % _numParticipants
var getShuffledSenders = (_participants) => _participants.sort(() => Math.random() - 0.5)

var getReceivers = function(_senders)
{
    var numParticipants = getNumParticipants(participants)
    var offset = getOffset(numParticipants)

    return _senders.map((_sender, senderIndex) => {
        return _senders[ getReceiverIndex(senderIndex, numParticipants, offset )]
    })
}

var printPairings = (_senders, _receivers) => _senders.map((sender, senderIndex) => { debug(sender + " -> " + _receivers[senderIndex]) })

var senders = getShuffledSenders(participants)
var receivers = getReceivers(senders)
printPairings(senders, receivers)