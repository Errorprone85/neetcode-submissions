public class LinkedList {
    private Node head;
    private Node tail;
    private int size;

    public int Get(int index)
    {
        if (size == 0 || index >= size) return -1;
        if (size == 1) return head.Val;

        var curr = head;
        for (var c = 1; c <= index; c++)
        {
            curr = curr.Next;
        }

        return curr?.Val ?? -1;
    }

    public void InsertHead(int val)
    {
        size++;

        if (head == null)
        {
            head = new Node();
            head.Val = val;
            tail = head;

            return;
        }

        var prev = head;
        head = new Node();
        head.Val = val;
        head.Next = prev;
    }

    public void InsertTail(int val)
    {
        var node = new Node { Val = val };
    
        if (tail == null)
        {
            head = tail = node;
        }
        else
        {
            tail.Next = node;
            tail = node;
        }
        
        size++;
    }

    public bool Remove(int index)
    {
        if (index < 0 || index >= size) return false;

        if (size == 1)
        {
            head = null;
            tail = null;
        }
        else if (index == 0)
        {
            head = head.Next;
        }
        else
        {
            Node nodeBefore = head;
            for (var c = 0; c < index - 1; c++)
            {
                nodeBefore = nodeBefore.Next;
            }
            
            // nodeBefore is now the node at position index-1
            // nodeBefore.Next is the node we want to remove
            nodeBefore.Next = nodeBefore.Next.Next;
            
            // If we removed the tail, update it
            if (nodeBefore.Next == null)
            {
                tail = nodeBefore;
            }
        }
        
        size--;
        return true;
    }

    public List<int> GetValues()
    {
        var result = new List<int>();

        if (size == 0) return result;

        var curr = head;
        result.Add(curr.Val);

        while (curr.Next != null)
        {
            curr = curr.Next;
            result.Add(curr.Val);
        }

        return result;
    }

    private class Node
    {
        public Node Next { get; set; }
        public int Val { get; set; }
    }
}