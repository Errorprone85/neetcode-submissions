public class DynamicArray {
    private int?[] arr;
    private int size;
    
    public DynamicArray(int capacity) {
        arr = new int?[capacity];
        size = 0;
    }

    public int Get(int i)
    {
        var val = arr[i];
        
        return val!.Value;
    }

    public void Set(int i, int n) {
        arr[i] = n;
    }

    public void PushBack(int n) {
        if (size >=  arr.Length)
            Resize();
        
        arr[size] = n;
        size++;
    }

    public int PopBack() {
        var idx = --size;

        var val = arr[idx];

        return val!.Value;
    }

    private void Resize() {
        var newArr = new int?[arr.Length * 2];
        Array.Copy(arr, newArr, arr.Length);
        arr = newArr;
    }

    public int GetSize()
    {
        return size;
    }

    public int GetCapacity() {
        return arr.Length;
    }
}
